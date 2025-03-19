output "distribution_domain_name" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
  description = "Domain name of the s3 distribution"
}