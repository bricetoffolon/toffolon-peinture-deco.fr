data "cloudflare_zones" "domain_zone" {
  name = var.domain_name
}

locals {
  zone_id = length(data.cloudflare_zones.domain_zone.result) > 0 ? data.cloudflare_zones.domain_zone.result[0].id : null
}

resource "cloudflare_dns_record" "www" {
  zone_id = local.zone_id
  comment = "Domain verification record"
  content = var.instance_ip
  name    = var.environment == "prod" ? "www" : var.environment
  proxied = true
  ttl     = 1 # 1 as handled automatically by cloudflare
  type    = "A"
}

data "cloudflare_dns_records" "domain_name" {
  zone_id = local.zone_id
  name = {
    contains = var.domain_name
  }
  type = "A"
}

locals {
  create_domain_name_dns_record = length(data.cloudflare_dns_records.domain_name.result) > 0 ? 0 : 1
}

resource "cloudflare_dns_record" "domain" {
  count   = local.create_domain_name_dns_record
  zone_id = local.zone_id
  comment = "Domain verification record"
  content = var.instance_ip
  name    = var.environment == "prod" ? var.domain_name : "${var.environment}.${var.domain_name}"
  proxied = true
  ttl     = 1 # 1 as handled automatically by cloudflare
  type    = "A"
}