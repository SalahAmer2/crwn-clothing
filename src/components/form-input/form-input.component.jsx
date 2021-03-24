import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>

        <input className='form-input' onChange={handleChange} {...otherProps} />
    
        {
            label ?
            (<label className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
                
            >
            {label}    
            </label>)
            : null
        }
    
    </div>
)

export default FormInput;

//input is the one above, the one under it is just the label that shrinks. input gets its type and all the other stuff through the props
//You can see that you can change the state through a onChange or onClick that triggers a prop above that triggers the prop above that one
// and so on till it reaches the parent that has state so then you'll see that the prop equals, there, this.handleChange or this.handleClick,
// etc., which means by triggering that prop you triggered the handleChange function that has setState in it, thus changing the state through 
//children components. Notice there is only one onChange which is at the lowest child component
// also don't forget, that components, even if they're
//defined in their own file, all child components are (technically all (and visually the closest child level)) called (so they're existing) in their parent components so they're 
//(technically all (and visually the closest child level)) in the parentcomponents' file too, so setstate() is used in the parent file while the children components are called in
//that same file, your not setting state in one file trying to make it affect the state in the file above it
//IMP NOTE: Unidirectional data flow means that this.state 's value is never taken and used in a component above it or in a state above it
// so the effect of children components through props can go up and up but stops when it reaches the parent component holding the state
// Check "avoid this" screenshot