import React, { Component, Fragment } from 'react';
import { Topbar, Filters, Contacts } from './components';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      rows: [],
      loading: false,
      search: '',
    }
  }

  sortData = (field ) => {
    if (field) {
      const { rows } = this.state;

      rows.sort((a,b) => {
        const keyA = a[field];
        const keyB = b[field];

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
      });

      this.setState({ rows });
    } else {
      this.fetchContacts();
    }
  }

  formatDate = (dateToFormat) => {
    const { format } = Intl.DateTimeFormat('pt-BR');
    const date = new Date(dateToFormat);
    return format(date);
  }

  fetchContacts = async () => {
    this.setState({ loading: true });
    const { search } = this.state;
    const baseUrl = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

    const response = await fetch(`${baseUrl}?search=${search}`);
    const data = await response.json() || [];

    const rows = data.reduce((acc, row) => {
      const admissionDateFormat = this.formatDate(row.admissionDate);
      acc.push({...row, admissionDateFormat });
      return acc;
    }, []);

    this.setState({ rows });
    this.setState({ loading: false });
  }

  onInputSearchChange = (element) => {
    const { value } = element.target;
    this.setState({ search: value });
    this.fetchContacts();
	}

  async componentDidMount() {
    await this.fetchContacts();
    this.sortData();
  }
  
  render() {
    const { rows, search, loading } = this.state;

    return (
      <Fragment>
        <Topbar />
        <Filters 
          search={search} 
          onInputSearchChange={this.onInputSearchChange}
          sortData={this.sortData}
        />
        <Contacts 
          rows={rows}
          loading={loading}
        />
      </Fragment>
    )
  }
}

export default App;
