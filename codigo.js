"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const textAreaEntrada = document.getElementById("textAreaEntrada");
const textAreaSalida = document.getElementById("textAreaSalida");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const divContenedorSecundario = document.getElementById("divContenedorSecundario");
const dibujo = document.getElementById("dibujo");
const mensaje = document.getElementById("mensaje");
function promesaEncriptar(texto) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (typeof texto !== "string") {
                reject(new Error("El texto proporcionado es inválidoo"));
            }
            try {
                let textoEncriptado = texto
                    .replace("e", "enter")
                    .replace("i", "imes")
                    .replace("o", "ober")
                    .replace("a", "ai")
                    .replace("u", "ufat");
                resolve(textoEncriptado);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
function promesaDesencriptar(texto) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (typeof texto !== "string") {
                reject(new Error("El texto proporcionado es inválidoo"));
            }
            try {
                var textoEncriptado = texto
                    .replace("enter", "e")
                    .replace("imes", "i")
                    .replace("ober", "o")
                    .replace("ai", "a")
                    .replace("ufat", "u");
                resolve(textoEncriptado);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
if (textAreaEntrada &&
    textAreaSalida &&
    btnEncriptar &&
    btnDesencriptar &&
    dibujo) {
    btnEncriptar.addEventListener("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (textAreaEntrada &&
                typeof textAreaEntrada.value === "string" &&
                divContenedorSecundario &&
                btnCopiar) {
                let texto = textAreaEntrada.value;
                if (texto === "") {
                    divContenedorSecundario.style.display = "block";
                    textAreaSalida.style.display = "none";
                    btnCopiar.style.display = "none";
                }
                else {
                    divContenedorSecundario.style.display = "block";
                    dibujo.style.display = "none";
                    mensaje.style.display = "none";
                    try {
                        let mensajeEncriptado = yield promesaEncriptar(texto);
                        console.log(mensajeEncriptado);
                        textAreaSalida.value = mensajeEncriptado;
                        textAreaEntrada.value = "";
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            else {
                console.log("El texto proporcionado es inválido.");
            }
        });
    });
}
if (textAreaEntrada &&
    textAreaSalida &&
    btnEncriptar &&
    btnDesencriptar &&
    dibujo) {
    btnDesencriptar.addEventListener("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (textAreaEntrada &&
                typeof textAreaEntrada.value === "string" &&
                divContenedorSecundario &&
                textAreaSalida &&
                btnCopiar) {
                let texto = textAreaEntrada.value;
                if (texto === "") {
                    divContenedorSecundario.style.display = "block";
                    textAreaSalida.style.display = "none";
                    btnCopiar.style.display = "none";
                }
                else {
                    divContenedorSecundario.style.display = "block";
                    dibujo.style.display = "none";
                    mensaje.style.display = "none";
                    try {
                        let mensajeDesencriptado = yield promesaDesencriptar(texto);
                        textAreaSalida.value = mensajeDesencriptado;
                        textAreaEntrada.value = "";
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            else {
                console.log("El texto proporcionado es inválido.");
            }
        });
    });
}
function copiarAlPortapapeles(texto) {
    const elem = document.createElement("textarea");
    elem.value = texto;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
if (btnCopiar && textAreaSalida) {
    btnCopiar.addEventListener("click", function () {
        copiarAlPortapapeles(textAreaSalida.value);
        textAreaSalida.value = "";
    });
}
