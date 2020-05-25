import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 order: '',
		}
	}

	handleClickFilter = (filter) => {
		const order = filter === this.state.order ? '' : filter;
		this.setState({ order });
		this.props.sortData(order);
	}

	render() {
		const { search, onInputSearchChange } = this.props;
		const { order } = this.state;

		return ( 
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input 
							type="text" 
							className="filters__search__input" 
							placeholder="Pesquisar" 
							value={search}
							onChange={onInputSearchChange}
						/>

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button 
						className={`filters__item ${order === 'name' && 'is-selected'}`}
						onClick={() => this.handleClickFilter('name')}
					>
						Nome <i className="fas fa-sort-down" />
					</button>
					<button 
						className={`filters__item ${order === 'country' && 'is-selected'}`}
						onClick={() => this.handleClickFilter('country')}
					>
						País <i className="fas fa-sort-down" />
					</button>
					<button 
						className={`filters__item ${order === 'company' && 'is-selected'}`}
						onClick={() => this.handleClickFilter('company')}
					>
						Empresa <i className="fas fa-sort-down" />
					</button>
					<button 
						className={`filters__item ${order === 'department' && 'is-selected'}`}
						onClick={() => this.handleClickFilter('department')}
					>
						Departamento <i className="fas fa-sort-down" />
					</button>
					<button 
						className={`filters__item ${order === 'admissionDate' && 'is-selected'}`}
						onClick={() => this.handleClickFilter('admissionDate')}
					>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
