import React, {useState} from "react";
import Formulario1 from './Components/Formulario1';
import ListaDeEstudiantes from './Components/ListaDeEstudiantes';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  // Función para agregar un estudiante al array
  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  // Función para eliminar un estudiante por índice
  const eliminarEstudiante = (index) => {
    const nuevosEstudiantes = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevosEstudiantes);
  };

  // Función para editar un estudiante
  const editarEstudiante = (index, estudianteActualizado) => {
    const nuevosEstudiantes = estudiantes.map((estudiante, i) =>
      i === index ? estudianteActualizado : estudiante
    );
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario1 agregarEstudiante={agregarEstudiante} />
        <ListaDeEstudiantes
          estudiantes={estudiantes}
          eliminarEstudiante={eliminarEstudiante}
          editarEstudiante={editarEstudiante}
        />
      </div>
    </div>
  );
};

export default App;