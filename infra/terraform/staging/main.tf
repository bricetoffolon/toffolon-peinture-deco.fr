variable "project_id" {
  type        = string
  description = "project id for scaleway"
}

variable "ssh_key" {
  type        = string
  description = "SSH KEY to use for scaleway instance"
  sensitive   = true
}

variable "instance_type" {
  type        = string
  description = "Instance type for scaleway server"
}

variable "aws_region" {
  type = string                     # The type of the variable, in this case a string
  default = "eu-west-3"                 # Default value for the variable
  description = "The aws region" # Description of what this variable represents
}

variable "scaleway_zone" {
  type        = string
  description = "Zone of the instance."
  default     = "fr-par-1"
}

variable "scaleway_region" {
  type        = string
  description = "Region of the instance."
  default     = "fr-par"
}

locals {
  environment = "staging"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  # Comment this to initialize backend
  backend "s3" {
    bucket         = "toffolon-infra-tf-state"
    key            = "staging/terraform.tfstate"
    encrypt        = true
    region = "eu-west-3"
  }
}

provider "scaleway" {
  zone       = var.scaleway_zone
  region     = var.scaleway_region
}

provider "cloudflare" {
}

provider "aws" {
  region = var.aws_region
}



# When initializing backend
resource "aws_s3_bucket" "terraform_state" {
  bucket        = "toffolon-infra-tf-state" # REPLACE WITH YOUR BUCKET NAME
  force_destroy = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state_crypto_conf" {
  bucket        = aws_s3_bucket.terraform_state.bucket
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

module "scaleway-instance" {
  source = "../modules/scaleway-module"

  # Input variables
  instance_type       = var.instance_type
  project_id          = var.project_id
  ssh_key             = var.ssh_key
}

module "cloudflare-dns-record" {
  source = "../modules/clouflare-module"

  # Input variables
  environment          = local.environment
  instance_ip          = module.scaleway-instance.instance_public_ip
}

module "aws-storage-config" {
  source = "../modules/aws-module"

  # Input variables
  environment = local.environment
}