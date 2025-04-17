#!/bin/bash
set -e  # Arrête le script si une commande échoue

echo "Début de l'installation de libwebp..."

echo "1. Extraction de l'archive..."
tar xvzf libwebp-1.5.0.tar.gz || { echo "❌ Échec de l'extraction"; exit 1; }

echo "2. Changement vers le répertoire de libwebp..."
cd libwebp-1.5.0 || { echo "❌ Échec du changement de répertoire"; exit 1; }

echo "3. Configuration..."
./configure || { echo "❌ Échec de la configuration"; exit 1; }

echo "4. Compilation..."
make || { echo "❌ Échec de la compilation"; exit 1; }

echo "5. Installation..."
make install || { echo "❌ Échec de l'installation"; exit 1; }

echo "6. Mise à jour des liens de bibliothèques..."
ldconfig || { echo "❌ Échec de ldconfig"; exit 1; }

echo "7. Retour au répertoire parent..."
cd .. || { echo "❌ Échec du retour au répertoire parent"; exit 1; }

echo "8. Nettoyage..."
rm -rf libwebp-1.5.0 libwebp-1.5.0.tar.gz || { echo "❌ Échec du nettoyage"; exit 1; }

echo "✅ Installation de libwebp terminée avec succès!"
