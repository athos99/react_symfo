<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ReactController extends BaseController
{
    /**
     * @Route("/test_react", name="test_react")
     * @return Response
     */
    public function index()
    {
        return $this->render('test_react.html.twig');
    }


    /**
     * @Route("/game", name="react_game")
     * @return Response
     */
    public function reactGame()
    {
        return $this->render('react_game.html.twig');
    }

    /**
     * @Route("/mui", name="react_mui")
     * @return Response
     */
    public function reactMui()
    {
        return $this->render('react_mui.html.twig');
    }


}
