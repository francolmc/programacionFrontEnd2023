class Celula {
    constructor(estado) {
        this._vivo = estado;
    }
    
    estaVivo() {
        return this._vivo;
    }

    cambiarEstado() {
        this._vivo = !this._vivo;
        /* if (this._vivo) {
            this._vivo = false;
        } else {
            this._vivo = true;
        } */
        // this._vivo = this._vivo ? false : true;
    }
}

/* quedamos pendiente con los codigos que correspondan a la actualizacion de las
celulas en la tabla y luego la continuidad del juego con el analisis de las celulas
en cada vuelta */
class Tablero {
    constructor(filas, columnas) {
        this._filas = filas;
        this._columnas = columnas;
        this.celulas = this.inicializarTablero();
    }

    inicializarTablero() {
        const celulas = [];
        for(let i = 0; i < this._filas; i++) {
            const fila = [];
            for(let j = 0; j < this._columnas; j++) {
                const estado = Math.random() < 0.5 ? true : false;
                fila.push(new Celula(estado));
            }
            celulas.push(fila);
        }

        return celulas;
    }

    contarCelulas(fila, columna) {
        let contadorCelulasVivas = 0;
        console.log(fila, columna);
        if ((fila > 0 && columna > 0)&&(this.celulas[fila - 1][columna - 1].estaVivo()))
            contadorCelulasVivas++;
        if ((fila > 0)&&(this.celulas[fila -1][columna].estaVivo()))
            contadorCelulasVivas++;
        if ((fila > 0 && columna < this._columnas - 1)&&(this.celulas[fila - 1][columna + 1].estaVivo()))
            contadorCelulasVivas++;
        if ((columna>0)&&(this.celulas[fila][columna - 1].estaVivo()))
            contadorCelulasVivas++;
        if ((columna<this._columnas - 1)&&(this.celulas[fila][columna + 1].estaVivo()))
            contadorCelulasVivas++;
        if ((fila<this._filas - 1 && columna>0)&&(this.celulas[fila + 1][columna - 1].estaVivo()))
            contadorCelulasVivas++;
        if ((fila<this._filas - 1)&&(this.celulas[fila + 1][columna].estaVivo()))
            contadorCelulasVivas++;
        if ((fila<this._filas - 1&&columna<this._columnas - 1)&&(this.celulas[fila + 1][columna + 1].estaVivo()))
            contadorCelulasVivas++;
        
        return contadorCelulasVivas;
    }

    actualizarTablero() {
        const nuevasCelulas = [];
        for(let i = 0; i < this._filas; i++) {
            const nuevaFila = [];
            for(let j = 0; j < this._columnas; j++) {
                const vecinosVivos = this.contarCelulas(i, j);
                let nuevaCelula;
                if(this.celulas[i][j].estaVivo()) {
                    if (vecinosVivos < 2 || vecinosVivos > 3) {
                        nuevaCelula = new Celula(false);
                    } else {
                        nuevaCelula = new Celula(true);
                    }
                } else {
                    if (vecinosVivos === 3) {
                        nuevaCelula = new Celula(true);
                    } else {
                        nuevaCelula = new Celula(false);
                    }
                }
                nuevaFila.push(nuevaCelula);
            }
            nuevasCelulas.push(nuevaFila);
        }

        this.celulas = nuevasCelulas;
    }

    mostrarTablero() {
        // obtenemos la tabla del documento html por su id
        const tablaHTML = document.getElementById('tablero');
        // limpiamos el contenido de la tabla
        tablaHTML.innerHTML = '';
        for (let i = 0; i < this._filas; i++) {
            const filaHTML = document.createElement('tr');
            for (let j = 0; j < this._columnas; j++) {
                const columnaHTML = document.createElement('td');
                columnaHTML.classList.add( this.celulas[i][j].estaVivo() ? 'celulaViva' : 'celulaMuerta');
                filaHTML.appendChild(columnaHTML);
            }
            tablaHTML.appendChild(filaHTML);
        }
    }
}

const iniciarPartida = () => {
    const tablero = new Tablero(20, 20);
    tablero.mostrarTablero();

    setInterval(() => {
        tablero.actualizarTablero();
        tablero.mostrarTablero();
    }, 1000);
}