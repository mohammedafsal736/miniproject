import React from 'react';

const Register = ({onRouteChange }) => {
    return(
        <article class="br3 ba b--black-10 bw2 mv4 w-100 w-50-m w-25-l mw6 shadow-7 center">
            <main class="pa4 black-80">
            <div class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="f3 fw6 ph0 mh0">Register</legend>
                <div class="mt3">
                <label class="db fw6 lh-copy f6" htmlFor="name">Name*</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                </div>
                <div class="mt3">
                <label class="db fw6 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="phone"  id="phone" />
                </div>
                <div class="mt3">
                <label class="db fw6 lh-copy f6" htmlFor="address">Address</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="address"  id="address" />
                </div>
                <div class="mt3">
                <label class="db fw6 lh-copy f6" htmlFor="email-address">Email*</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div class="mv3">
                <label class="db fw6 lh-copy f6" htmlFor="password">Password*</label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
            </fieldset>
            <div class="">
                <input 
                onClick={() => onRouteChange('home')}
                class="f6 link dim br3 ph3 pv2 mb2 dib white bg-black pointer" 
                type="submit" value="Register" />
            </div>
            </div>
        </main>
        </article>

    );
}


export default Register;