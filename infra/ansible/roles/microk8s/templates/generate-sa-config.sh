#!/bin/bash
NAMESPACE="toffolon"
SA_NAME="deployment-manager"
KUBECONFIG_FILE="sa-kubeconfig.yaml"

# Get cluster info
SERVER=$(sudo /snap/bin/microk8s kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')
CA_CERT=$(sudo /snap/bin/microk8s kubectl config view --flatten=true --minify -o jsonpath='{.clusters[0].cluster.certificate-authority-data}')

# Create token
TOKEN=$(sudo /snap/bin/microk8s kubectl create token $SA_NAME -n $NAMESPACE)

# Generate kubeconfig
cat << EOF > $KUBECONFIG_FILE
apiVersion: v1
kind: Config
clusters:
- name: microk8s-cluster
  cluster:
    server: $SERVER
    certificate-authority-data: $CA_CERT
contexts:
- name: $SA_NAME-context
  context:
    cluster: microk8s-cluster
    namespace: $NAMESPACE
    user: $SA_NAME
current-context: $SA_NAME-context
users:
- name: $SA_NAME
  user:
    token: $TOKEN
EOF

echo "Kubeconfig created: $KUBECONFIG_FILE"