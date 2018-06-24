import React from 'react';
import { ListView, ListViewDataSource } from 'react-native';
import { connect } from 'react-redux';
import { ILibrary } from '../models';
import { AppStore } from '../reducers';
import ListItem from './ListItem';

export interface LibraryListProps {
  libraries: any[];
}

class LibraryListContainer extends React.Component<LibraryListProps, object> {
  dataSource!: ListViewDataSource;

  constructor(props: LibraryListProps) {
    super(props);
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library: ILibrary) {
    return <ListItem library={library}/>;
  }

  render() {
    return <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />;
  }
}

const mapStateToProps = (state: AppStore) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryListContainer);
