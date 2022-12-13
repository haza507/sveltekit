import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = 'summer';
const defaultValue2 = 'rr';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
const initialValue2 = browser ? window.sessionStorage.getItem('theme2') ?? defaultValue2 : defaultValue2;
  
const theme = writable<string>(initialValue);
const theme2 = writable<string>(initialValue2); 
theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
  }
});

theme2.subscribe((value) => {
    if (browser) {
      window.sessionStorage.setItem('theme2', value);
    }
  });
 
export default theme ;