variable "scaleway_access_key" {
  type        = string
  description = "access key for scaleway organisation"
}

variable "scaleway_secret_key" {
  type        = string
  description = "secret key for scaleway organisation"
  sensitive   = true
}

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

variable "volume_size_in_gb" {
  type        = string
  description = "Size of the root volume for scaleway instance"
}

module "web-app" {
  source = "../scaleway-module"

  # Input variables
  instance_type       = var.instance_type
  scaleway_access_key = var.scaleway_access_key
  scaleway_secret_key = var.scaleway_secret_key
  project_id          = var.project_id
  ssh_key             = var.ssh_key
  volume_size_in_gb   = var.volume_size_in_gb
}