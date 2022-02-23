import React, { useState } from 'react';

const App = (props) => {
    const [result, setResult] = useState(false);

    const isPalindrome = (str) => {
        const strArr = str.split('');
        const strArrReverse = strArr.reverse();
        const strReverse = strArrReverse.join('');
        return str === strReverse;
    };
    
    const allPossiblePermutations = (string) => {
        if (string.length < 2) return string;

        var permutations = [];
        for (var i = 0; i < string.length; i++) {
            var char = string[i];

            
            if (string.indexOf(char) != i) continue;

            var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

            for (var subPermutation of allPossiblePermutations(remainingString))
            permutations.push(char + subPermutation)
        }
        return permutations;
    };
    
    const isAnagramOfPalindrome = (text) => {
        const anagrams = allPossiblePermutations(text);
        
        return anagrams.filter(anagram => {
            return isPalindrome(anagram);
        });
    };


    const onChangeInput = (ev) => {
        if (isAnagramOfPalindrome(ev.target.value).length > 0) {
            setResult(true);
        } else {
            setResult(false);
        }
    };

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <input type="text" placeholder="Search" onChange={onChangeInput}/>
                    <span>{result.toString()}</span>
                </div>
            </div>
        </div>
    );
};

export default App; 