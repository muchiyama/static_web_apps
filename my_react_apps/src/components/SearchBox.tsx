import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { components } from 'react-select';

const my_styles: any = {
    option: (provided: any[], state: any) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state ? 'red' : 'blue',
        padding: 20,
    }),
    control: (provided: any[]) => ({
        ...provided
        // none of react-select's styles are passed to <Control />
    }),
}

const DropdownIndicator = (
    props: any
  ) => {
    return (
            <components.IndicatorsContainer onClick={() => console.log("clicked")} {...props} styles={{display: "none"}}>
                <span onClick={(e: any) => console.log("clicked")}>Click</span>
            </components.IndicatorsContainer>
    );
};

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
                    components={{ DropdownIndicator }}
                    isMulti
                    CreatableSelect={true}
                    isSearchable
                    styles={my_styles}
                />
            </>
        )
    }
}

export default SearchBox