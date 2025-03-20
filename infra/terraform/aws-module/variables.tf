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

variable "cache_policy_id" {
  type = string
  description = "Cache policy used for cloudfront distribution"
  default = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized (Recommended for S3)
}