variable "cluster_name" {
  type    = string
  default = "cluster"
}

variable "public_az" {
  type    = string
  default = "a"
}

variable "private_az" {
  type    = string
  default = "b"
}

variable "k8s_version" {
  type    = string
  default = "1.33"
}

variable "enable_private" {
  type    = bool
  default = false
}