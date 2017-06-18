# Platzom

Platzom es un idioma inventado realizado en JavaScript.

## Descripción

En este se ejercicio se creará un nuevo lenguaje llamado 'platzom'
El cual tiene las siguientes reglas:

- Si la palabra termina con "ar", estas dos letras deben ser eliminas de
 la palabra.

- Si la palabra inicia con "z", se añade al final  de la palabra las letras
 "pe". Ejemplo palabra: "zorro" => "zorrope"

- Si la palabra traducida tiene 10 o más letras, se debe dividir en dos por
 la mitad y estas dos partes deben estar unidas con un guión medio.
 Ejamplo: "abecedario" => "abce-dario".

- Si la palabra original es un palíndromo, ninguna regla anteriaor cuenta y
 se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.
 Ejemplo: "sometemos" => "SoMeTeMoS"

 ## Instalación

```
 npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zapato") // Zorrope
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```
## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifsyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)