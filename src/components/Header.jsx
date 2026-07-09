export default function Header({page, setPage}){
	return (
		<header className="header">
			<div className="header-inner">
				<div className="brand" onClick={()=>setPage('home')}>
					Beleza & Modelo
				</div>
				<nav className="nav">
					<button onClick={()=>setPage('home')} className={`nav-button ${page==='home' ? 'active' : ''}`}>
						Home
					</button>
					<button onClick={()=>setPage('services')} className={`nav-button ${page==='services' ? 'active' : ''}`}>
						Serviços
					</button>
				</nav>
				<div className="nav">
					<button className="icon-button">
						<span>✦</span>
					</button>
					<button className="icon-button">
						<span>◌</span>
					</button>
				</div>
			</div>
		</header>
	)
}