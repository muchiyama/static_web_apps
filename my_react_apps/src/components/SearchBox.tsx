import React from 'react';
import CreatableSelect from 'react-select/creatable';

class SearchBox extends React.Component {
    private CreateOptions(): any {
        return [
            { value: 'pikachu', label: 'ピカチュウ' },
            { value: 'bulbasaur', label: 'フシギダネ' },
            { value: 'charmander', label: 'ヒトカゲ' },
            { value: 'squirtle', label: 'ゼニガメ' },
        ];
    }

    render () {
        return (
            <>
                <CreatableSelect options={this.CreateOptions()} isMulti CreatableSelect isSearchable />
            </>
        )
    }
}

export default SearchBox