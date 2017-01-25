<?php
	header("Content-type:application/json;charset=utf-8");

    require_once('db.php');

    if ($link) {
    	$newsid = $_GET['newsid'];
    	mysqli_query($link,'SET NAMES UTF8');
    	$sql = "SELECT *  FROM `news` WHERE `id` = {$newsid}";

    	$result= mysqli_query($link,$sql);

        $senddata = array();
        while($row = mysqli_fetch_assoc($result)){
            array_push($senddata,array(
                                        'id' =>addslashes(htmlspecialchars_decode($row['id'])),
                                        'newstype' =>addslashes(htmlspecialchars_decode($row['newstype'])),
                                        'newstitle' =>addslashes(htmlspecialchars_decode($row['newstitle'])),
                                        'newsimg' =>addslashes(htmlspecialchars_decode($row['newsimg'])),
                                        'newstime' =>addslashes(htmlspecialchars_decode($row['newstime'])),
                                        'newssrc' =>addslashes(htmlspecialchars_decode($row['newssrc'])),
                ));
        }

        echo json_encode($senddata);
    	

    }

    mysqli_close($link);
?>