package com.wyn.api.users;

import com.wyn.api.users.mapper.UsersMapper;
import com.wyn.entity.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wuyanan on 2017/3/14.
 */
@RestController
@EnableAutoConfiguration
//启注解事务管理
@EnableTransactionManagement
@RequestMapping("api/user/")
public class UserManagerResource {
    @Autowired
    private UsersMapper usersMapper;
    @RequestMapping(value="query-all",method = RequestMethod.GET)
    public List<Users> queryAll(){
        List<Users> usersList = new ArrayList<Users>();
        usersList = usersMapper.queryAll();
        return usersList;
    }
}
