variable "environment" {
  type        = string
  description = "environment of deployment"
  default     = "dev"
}

variable "domain_name" {
  type        = string
  description = "Domain name of the application"
  default     = "toffolon-peinture-deco.fr"
}

variable "instance_ip" {
  type        = string
  description = "Ip of the instance created with scaleway module"
}