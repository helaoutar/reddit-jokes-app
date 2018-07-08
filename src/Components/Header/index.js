import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight  } from 'react-native';
import { connect } from 'react-redux';

import { goBack } from '../../actions';
import leftArrow from '../../assets/icons/left-arrow6.png';
import logo from '../../assets/icons/logo.jpg';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mode, currentCategory } = this.props;
    return (
    <View style={headerStyle.container}>
      <Image style={arrowStyle.container} source={logo}/>
      <Text style={titleStyle.container}>{mode === 'categories' ? 'Reddit Jokes' : currentCategory }</Text>
      {mode === 'categories' ?
        null : 
        <TouchableHighlight style={{  
          position: 'relative',
          top: 14,
          right: 30,
          alignSelf: 'flex-end',
          borderRadius: 10
        }} onPress={this.props.goBack}>
          <Image style={logoStyle.container} source={leftArrow}/>
        </TouchableHighlight>
      }
    </View>)
  }
}

const arrowStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 14,
    left: 14,
    height: 35,
    width: 35,
  }
});

const logoStyle = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
  }
});


const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#1D2945',
    height: 65,
    position: 'relative',
  },
});

const titleStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 60,
    top: 15,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'monospace'
  }
});

const mapStateToProps = ({ mode, currentCategory }) => ({ mode, currentCategory });

const mapDispatchToProps = {
  goBack
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);