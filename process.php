<?php
//allows reading from the database
require_once './php/db_connect.php';

//setting variables from the form
$Day=$_POST['Day'];
$Time=$_POST['TimeStart'];
$Time=$_POST['TimeEnd'];

//makes sure the strings don't have weird characters
$uDay = filter_var($Day, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
$uTime = filter_var($Time, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

//sql for the database
$sql = "INSERT INTO SprinklerManager (Day, TimeStart)
VALUES ('$uDay', '$uTimeStart')";

//checking to see if the item is inserted
if ($db->query($sql) === TRUE) {
} else {
    echo "Error: " . $sql . "<br>" . $db->error;
}

//setting sql from BabyNames
$sql = "SELECT Day, TIME_FORMAT( TIME, \"%r\" ) as Time\n"
    . "FROM `SprinklerManager` \n"
    . "WHERE 1 \n"
    . "LIMIT 0 , 30";;
$result = $db->query($sql);

//manipulates the database to get the most votes in desceding order
/*$sql = "SELECT name, gender, COUNT( name ) AS Duplicates\n"
    . "FROM BabyNames\n"
    . "GROUP BY name\n"
    . "ORDER BY Duplicates DESC \n"
    . "LIMIT 10";

$result = $db->query($sql);*/

/*var_dump($result);*/
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Sprinkler Manager</title>

    <link href="css/practice.css" rel="stylesheet">

</head>

<body id="page-top">

    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Sprinkler Manager</h2>
                    <hr class="primary">
                </div>
            </div>
        </div>
        <div class="container">
                <center>
                    <!--section where the table is printed to the screen-->
                    <?php
                            echo"<table class='table'>
                            <tr>
                            <th>Day</th>
                            <th>Time</th>
                            </tr>";
                            if ($result->num_rows > 0) {
                            // output data of each row
                            while($row = $result->fetch_assoc()) {
                                    echo "<tr><td>" .$row['Day']. "</td><td>" . $row['Time']. "</td></tr><br>";
                                }
                            } else {
                                echo "0 results";
                            }
                            echo"</table>";
                        ?>
                     <form method="post" action="process.php">
                        Time : <input type="time" name="Time" id="Time" class="box"/><br />
                        Day : <input type="radio" name="Day" id="Sunday" value="Sunday"/>Sunday
                                <input type="radio" name="Day" id="Monday" value="Monday"/>Monday
                                <input type="radio" name="Day" id="Tuesday" value="Tuesday"/>Tuesday
                                <input type="radio" name="Day" id="Wednesday" value="Wednesday"/>Wednesday
                                <input type="radio" name="Day" id="Thursday" value="Thursday"/>Thursday
                                <input type="radio" name="Day" id="Friday" value="Friday"/>Friday
                                <input type="radio" name="Day" id="Saturday" value="Saturday"/>Saturday<br/>
                                <input type="submit" value="Submit" onClick="return empty()"/>
                    </form>
                </center>
        </div>
    </section>

    <!--Custom-->
    <script src="js/p6.js"></script>

</body>

</html>

<?php
//closes the database
$db->close();
?>