import config from '../config'

export interface Terms {
    [id: number]: string
}

export interface SetTermAction extends Redux.Action {
    terms: Terms
}

interface TermDB {"Term_ID":number,"Term": string}

export function fetchTerms(): Promise<Terms>{
    return fetch(config.api+"/term_view")
    .then(response => response.json())
    .then(json => json as TermDB[])
    .then(terms => terms.reduce<Terms>((terms, t) => {terms[t.Term_ID] = t.Term; return  terms}, {}))
}