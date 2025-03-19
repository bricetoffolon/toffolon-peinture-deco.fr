resource "aws_s3_bucket" "storage" {
  for_each = toset(["static", "posts"])
  bucket = "${var.environment}-${var.company_name}-${each.key}"

  tags = {
    Environment = var.environment
  }
}