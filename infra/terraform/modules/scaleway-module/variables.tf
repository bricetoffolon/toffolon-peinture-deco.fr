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
  default     = 20
}

variable "ssh_key" {
  type        = string
  description = "SSH KEY to use for scaleway instance"
  sensitive   = true
}

variable "scaleway_ansible_user" {
  type        = string
  description = "username for ansible user"
  sensitive   = true
}