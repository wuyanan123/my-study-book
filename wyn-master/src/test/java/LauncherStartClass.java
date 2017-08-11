
import com.wyn.api.users.UserManagerResource;
import org.springframework.boot.SpringApplication;

/**
 * Created by wuyanan on 2017/3/10.
 * 启动类
 */
public class LauncherStartClass {
    public static void main(String[] args) {

//        Object[] sources = new Object[]{Application.class,UserManagerResource.class};
//        sources[0] = ;
//        sources[1] = ;
        SpringApplication.run(UserManagerResource.class, args);
    }
}
