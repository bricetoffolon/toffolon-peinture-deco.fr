variable "aws_region" {
  type = string                     # The type of the variable, in this case a string
  default = "eu-west-3"                 # Default value for the variable
  description = "The aws region" # Description of what this variable represents
}

variable "company_name" {
  type = string
  default = "toffolon"
  description = "Name of the company"
}

variable "environment" {
  type        = string
  description = "environment of deployment"
  default     = "dev"
}

variable "aws_access_key" {
  type = string
  description = "Access key for AWS user"
  sensitive = true
}

variable "aws_secret_key" {
  type = string
  description = "Secret key for AWS User"
  sensitive = true
}

variable "cache_policy_id" {
  type = string
  description = "Cache policy used for cloudfront distribution"
  default = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized (Recommended for S3)
}