<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 09/04/2018
 * Time: 4:21 CH
 */

namespace App\Http\Controllers;


class TeamController extends Controller
{
    public function showTeam()
    {
        return view('pages.team');
    }
}