const textAreaEntrada = document.getElementById(
  "textAreaEntrada"
) as HTMLTextAreaElement | null;
const textAreaSalida = document.getElementById(
  "textAreaSalida"
) as HTMLTextAreaElement | null;
const btnEncriptar = document.getElementById(
  "btnEncriptar"
) as HTMLButtonElement | null;
const btnDesencriptar = document.getElementById(
  "btnDesencriptar"
) as HTMLButtonElement | null;
const btnCopiar = document.getElementById(
  "btnCopiar"
) as HTMLButtonElement | null;
const divContenedorSecundario = document.getElementById(
  "divContenedorSecundario"
) as HTMLDivElement | null;

const dibujo = document.getElementById("dibujo") as HTMLImageElement;
const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;

async function promesaEncriptar(texto: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof texto !== "string") {
      reject(new Error("El texto proporcionado es inválidoo"));
    }
    try {
      let textoEncriptado: string = texto
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("o", "ober")
        .replace("a", "ai")
        .replace("u", "ufat");
      resolve(textoEncriptado);
    } catch (error) {
      reject(error);
    }
  });
}

async function promesaDesencriptar(texto: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof texto !== "string") {
      reject(new Error("El texto proporcionado es inválidoo"));
    }
    try {
      var textoEncriptado: string = texto
        .replace("enter", "e")
        .replace("imes", "i")
        .replace("ober", "o")
        .replace("ai", "a")
        .replace("ufat", "u");
      resolve(textoEncriptado);
    } catch (error) {
      reject(error);
    }
  });
}

if (
  textAreaEntrada &&
  textAreaSalida &&
  btnEncriptar &&
  btnDesencriptar &&
  dibujo
) {
  btnEncriptar.addEventListener("click", async function () {
    if (
      textAreaEntrada &&
      typeof textAreaEntrada.value === "string" &&
      divContenedorSecundario &&
      btnCopiar
    ) {
      let texto = textAreaEntrada.value;
      if (texto === "") {
        divContenedorSecundario.style.display = "block";
        textAreaSalida.style.display = "none";
        btnCopiar.style.display = "none";
      } else {
        divContenedorSecundario.style.display = "block";
        dibujo.style.display = "none";
        mensaje.style.display = "none";
        try {
          let mensajeEncriptado = await promesaEncriptar(texto);
          console.log(mensajeEncriptado);
          textAreaSalida.value = mensajeEncriptado;
          textAreaEntrada.value = "";
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.log("El texto proporcionado es inválido.");
    }
  });
}

if (
  textAreaEntrada &&
  textAreaSalida &&
  btnEncriptar &&
  btnDesencriptar &&
  dibujo
) {
  btnDesencriptar.addEventListener("click", async function () {
    if (
      textAreaEntrada &&
      typeof textAreaEntrada.value === "string" &&
      divContenedorSecundario &&
      textAreaSalida &&
      btnCopiar
    ) {
      let texto = textAreaEntrada.value;
      if (texto === "") {
        divContenedorSecundario.style.display = "block";
        textAreaSalida.style.display = "none";
        btnCopiar.style.display = "none";
      } else {
        divContenedorSecundario.style.display = "block";
        dibujo.style.display = "none";
        mensaje.style.display = "none";
        try {
          let mensajeDesencriptado = await promesaDesencriptar(texto);
          textAreaSalida.value = mensajeDesencriptado;
          textAreaEntrada.value = "";
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.log("El texto proporcionado es inválido.");
    }
  });
}

function copiarAlPortapapeles(texto: string) {
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
