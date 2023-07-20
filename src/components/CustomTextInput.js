import {View, TextInput, StyleSheet} from 'react-native';

export const CustomTextInput = ({ value, onChangeText }) => {
    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search by title..."
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChangeText}
                clearButtonMode="always"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    searchBar: {
        height: 40,
        width: "100%",
    },
});
