<?php

namespace App\Menu;


use App\Application;
use App\Security\Action;
use Symfony\Component\Security\Core\Security;

class Menu
{
    /**
     * @var MenuTwig
     */
    public $menuTwig;

    public function __construct(MenuTwig $menuTwig, Security $security)
    {
        $this->menuTwig = $menuTwig;
    }
}
