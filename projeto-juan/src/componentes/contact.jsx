function contact() {
    const handleClick = () => {
        window.location.href = 'mailto: juan.barbosa@edu.etefmc.com.br ? subject=Contato pelo site&body=Olá Juan, gostaria de entrar em contato com você.';
    }
  return (
      <button className='Bcontact' onClick={handleClick}>CONTATE-ME</button>
  )
}

export default contact;