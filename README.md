# Primera parte: Correr Heroku

Es necesario crear una cuenta de la página oficial de heroku.

También es necesario instalar localmente el cliente heroku de línea de comandos:

[liderskull@archlinux ~]$ yay -Syu heroku-cli

se crea una carpeta:

[liderskull@archlinux ~]$ mkdir cloud_media_selector

se crean 2 archivos fuentes:

[liderskull@archlinux ~]$ touch index.php index.html

Se editan los códigos fuentes de las siguiente manera:

Se inicializa git:
[liderskull@archlinux cloud_media_selector]$ git init

Se añaden los archivos:
[liderskull@archlinux cloud_media_selecto]$ git add .

Se sube al repo local:
[liderskull@archlinux cloud_media_selecto]$ git commit -m "First commit"

Se crea el container heroku:
[liderskull@archlinux cloud_media_selecto]$ heroku create --stack cedar cloud-media-selector

Se sincroniza el repo local con heroku:
[liderskull@archlinux cloud_media_selecto]$ git push heroku master

Aparece refrescado en la página de heroku y aparece el botón Open App

Entonces, al clickear en el botón Open app aparece la ejecucion del container en el navegador:

Segunda parte: Heroku vinculado con github:

Se procede a crear un repositorio github con licencia gpl v3 y un gitignore por defecto. Como se ve en la siguiente captura:

Para establecer la vinculación de github con heroku será necesario borrar la actual instancia de Cloud Media Selector en le cuenta de Heroku.

Entonces se ingresa a <https://dashboard.heroku.com/apps/cloud-media-selector>, settings-> botón Delete App
Heroku pide confirmación:

Entonces localmente se clona el repo de la cuenta github:

[liderskull@archlinux github]$ pwd
/home/daniel/proyects/heroku/github
[liderskull@archlinux github]$ git clone <https://github.com/DanielRosatto/src-code-cloud-media-selector.git>
Clonando en 'src-code-cloud-media-selector'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Recibiendo objetos: 100% (4/4), 13.21 KiB | 541.00 KiB/s, listo.
[liderskull@archlinux github]$ cd src-code-cloud-media-selector/
[liderskull@archlinux src-code-cloud-media-selector]$

Se copian index.php e index.html al repo clonado:

[liderskull@archlinux src-code-cloud-media-selector]$ cp ../../cloud_media_selecto/index.php ../../cloud_media_selecto/index.html . -v
'../../cloud_media_selecto/index.php' -> './index.php'
'../../cloud_media_selecto/index.html' -> './index.html'

Se sincroniza el repo local:

[liderskull@archlinux src-code-cloud-media-selector]$ git status
En la rama main
Tu rama está actualizada con 'origin/main'.

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
    index.html
    index.php

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)
[liderskull@archlinux src-code-cloud-media-selector]$ git add .
[liderskull@archlinux src-code-cloud-media-selector]$ git commit -m"Se ingresa index de prueba"
[main fe33f96] Se ingresa index de prueba
 2 files changed, 11 insertions(+)
 create mode 100644 index.html
 create mode 100644 index.php
[liderskull@archlinux src-code-cloud-media-selector]$

Ahora se sincroniza el repo remoto:
