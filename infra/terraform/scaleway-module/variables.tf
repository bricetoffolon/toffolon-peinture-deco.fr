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

variable "project_id" {
  type        = string
  description = "Project ID."
}

variable "instance_type" {
  type        = string
  description = "type of instance"
  default     = "DEV1-L"
}

variable "volume_size_in_gb" {
  type        = number
  description = "Size of the root volume for instance min 10gb"
  default     = 10
}

variable "scaleway_access_key" {
  type        = string
  description = "access key for scaleway organisation"
}

variable "scaleway_secret_key" {
  type        = string
  description = "secret key for scaleway organisation"
  sensitive   = true
}

variable "ssh_key" {
  type        = string
  description = "SSH KEY to use for scaleway instance"
  sensitive   = true
}
