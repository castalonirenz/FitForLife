import React, { Component } from 'react';
import { View, Text, NetInfo, StyleSheet } from 'react-native';
const MinimumHeight = 0

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

function MiniOnlineSign() {
    return (
        <View style={[styles.offlineContainer, {backgroundColor:"#175c2c"}]}>
            <Text style={styles.offlineText}>Connected</Text>
        </View>
    );
}

class OfflineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false
        };
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({ status: isConnected }); }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }

    handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
       
    }

    render() {
        if (!this.state.status) {
            return <MiniOfflineSign />

        }
        return null
       
    }
}
const styles = StyleSheet.create({
    offlineContainer: {
      backgroundColor: '#e0301e',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width:"100%",
    },
    offlineText: { color: '#fff' }
  });
  
export default OfflineContainer;
