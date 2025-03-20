resource "scaleway_instance_server" "web" {
  project_id = var.project_id
  type       = var.instance_type
  image      = "debian_bookworm"

  ip_id = scaleway_instance_ip.public_ip.id

  root_volume {
    size_in_gb = var.volume_size_in_gb
  }

  security_group_id = scaleway_instance_security_group.www.id
}