package com.wyn.api.users.mapper;

import com.wyn.entity.users.Users;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by wuyanan on 2016/9/19.
 */
@Mapper
public interface UsersMapper {

    // 使用注解
//    @Select("SELECT * FROM USERS WHERE NAME = #{name}")
//    Users findByName(String name);

//    @Insert("INSERT INTO USERS(NAME, AGE) VALUES( #{name}, #{age})")
//    int insert(@Param("name") String name, @Param("age") Integer age);
//
//    @Insert("INSERT INTO USERS(ID,NAME, AGE) VALUES(#{users.id}, #{users.name}, #{users.age})")
//    int insertUsers(@Param("users") Users users);
//
//    @Select("select * from users where id = #{id}")
    Users selectById(Integer id);

    List<Users> queryAll();

}
