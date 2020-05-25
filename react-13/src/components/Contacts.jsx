import React from "react";
import { Contact, Spinner, Empty } from '../components';

class Contacts extends React.Component {
	render() {
		const { rows, loading } = this.props;
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
					<article data-testid="contact" className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>

					{loading ? <Spinner />
						: rows && rows.length 
							? rows.map(row => row && <Contact data={row}/>)
							: <Empty />
					}
				</section>
			</div> 
		);
	}
}

export default Contacts;
