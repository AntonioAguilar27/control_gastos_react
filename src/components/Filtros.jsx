import { useState,useEffect } from "react"

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtrar gastos</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Seleccione una categoria</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="gastos">Gastos</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="salud">Salud</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros