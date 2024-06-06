import useQuiosco from '../hooks/useQuiosco';
export default function Categoria({categoria}) {
  
  const {icono,id,name} = categoria
  const {handleCategoria,categoriaActal} = useQuiosco()

  return (
    <div className={`${categoriaActal.id == id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}> 
      <img src={`/img/icono_${icono}.svg`} alt={`${icono}`} className="w-12"/>
      <button
        type="button"
        onClick={()=>handleCategoria(id)}
        >{name}
      </button>
    </div>
  )
}
