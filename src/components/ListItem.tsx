import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, AppState } from 'react-native';
import { connect } from 'react-redux';
import { ILibrary } from '../models';
import { CardSection } from './common';

import * as actions from '../actions';
import { AppStore } from '../reducers';

export interface ListItemProps {
  library: ILibrary;
  expanded: boolean;
}

export class ListItem extends React.Component<ListItemProps, object> {
  renderDescription() {
    if (this.props.expanded) {
      return <Text>{this.props.library.description}</Text>;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>{this.props.library.title}</Text>
          </CardSection>
          <CardSection>
            {this.renderDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state: AppStore, ownProps: ListItemProps) => {
  const expanded = state.selectedLibraryId  === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
