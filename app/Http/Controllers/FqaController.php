<?php
/**
 * Created by PhpStorm.
 * User: DORE
 * Date: 10/04/2018
 * Time: 10:22 SA
 */

namespace App\Http\Controllers;


class FqaController extends Controller
{
    public function showFQA()
    {
        return view('pages.FQA');
    }
}