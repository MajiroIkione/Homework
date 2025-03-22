<?php

function Text($tag, $desc, $counter){

    for($i=0; $i<$counter; $i++)
    {
        echo "<$tag> $desc </$tag >" . "<br>";
    }
}

Text('h1', 'another title', 2)
    ?>