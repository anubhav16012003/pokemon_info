async function searchPokemon(params) {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch data");
        }

        const data = await response.json();
        const abilities = data.abilities;
        const pokemonAbility = document.getElementById('pokemonAbility');
        let allAbilites = '';

        abilities.forEach(element => {
            allAbilites += element.ability.name + ', ';
        });

        allAbilites = allAbilites.slice(0, -2);
        pokemonAbility.textContent = `Ability:- ` +allAbilites;
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite')

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        imgElement.style.height = "30vh";

    } catch (error) {
        console.error(error);
        
    }
}