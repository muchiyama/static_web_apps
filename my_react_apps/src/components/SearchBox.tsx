import React from 'react';
import CreatableSelect from 'react-select/creatable';
// import { components } from 'react-select';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHourglass } from "@fortawesome/free-regular-svg-icons";

const my_styles: any = {
    option: (provided: any[], state: any) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: 'blue',
        padding: 20,
    }),
    control: (provided: any[]) => ({
        ...provided
        // none of react-select's styles are passed to <Control />
    }),
}

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
                <CreatableSelect 
                    options={this.CreateOptions()}
                    closeMenuOnSelect={false}
                    // components={{ DropdownIndicator }}
                    components={{ IndicatorSeparator: () => null }}
                    isMulti
                    CreatableSelect={true}
                    isSearchable
                    placeholder="Search..."
                    styles={my_styles}
                />
            </>
        )
    }
}

export default SearchBox