const menu = [
    {
      id: 'register',
      label: 'Cadastros',
      adminAccess: true,
      child: [
        {
          id: 'people',
          label: 'Pessoas',
          adminAccess: false,
        },
        {
          id: 'bank',
          label: 'Bancos',
          adminAccess: true,
        },
      ],
    },
    {
      id: 'finance',
      label: 'Financeiro',
      adminAccess: true,
    },
    {
      id: 'commerce',
      label: 'Comercial',
      adminAccess: true,
      child: [
        {
          id: 'sale',
          label: 'Vendas',
          adminAccess: false,
        },
        {
          id: 'summary',
          label: 'Resumo',
          adminAccess: true,
        },
      ],
    },
    {
      id: 'report',
      label: 'Relatórios',
      adminAccess: true,
    },
  ];
  
  function getMenuItems(userIsAdmin, menuItems = menu) {
    return menuItems.filter(item => {
      if (item.adminAccess && !userIsAdmin) {
        console.log(`Item "${item.label}" não deve ser exibido para usuários não administradores.`);
        return false;
      }
  
      if (item.child) {
        item.child = getMenuItems(userIsAdmin, item.child);
        return item.child.length > 0;
      }
  
      return true;
    });
  }
  
  describe('Acesso ao Menu', () => {
    it('deve exibir todos os itens do menu para um usuário administrador', () => {
      const adminMenu = getMenuItems(true);
      expect(adminMenu.length).toEqual(menu.length);
    });
  
    it('deve tentar filtrar os itens exclusivos para administradores para um usuário não administrador', () => {
      const nonAdminMenu = getMenuItems(false);
      expect(nonAdminMenu.length).toEqual(menu.length);
    }); 
  
  });