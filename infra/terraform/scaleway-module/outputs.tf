output "instance_public_ip" {
  value       = scaleway_instance_server.web.public_ips               # The actual value to be outputted
  description = "The public IP address list of the scaleway instance" # Description of what this output represents
}