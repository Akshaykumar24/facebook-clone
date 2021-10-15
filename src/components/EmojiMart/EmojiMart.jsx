import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import React from 'react'

function EmojiMart() {
    return (
        <div >

            <Picker set='facebook' />
            <Picker onSelect={(emoji) => { }} />
            <Picker title='Pick your emoji…' emoji='point_up' />
            <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
            <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />
        </div>
    )
}

export default EmojiMart
